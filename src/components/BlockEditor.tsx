import React, { useState } from 'react';
import type { ContentBlock } from '../types';

interface BlockEditorProps {
  blocks: ContentBlock[];
  onChange: (blocks: ContentBlock[]) => void;
}

export function BlockEditor({ blocks, onChange }: BlockEditorProps) {
  const [selectedBlock, setSelectedBlock] = useState<number | null>(null);

  const moveBlock = (from: number, to: number) => {
    const newBlocks = [...blocks];
    const [removed] = newBlocks.splice(from, 1);
    newBlocks.splice(to, 0, removed);
    onChange(newBlocks);
  };

  const updateBlock = (index: number, content: Record<string, any>) => {
    const newBlocks = blocks.map((block, i) =>
      i === index ? { ...block, content } : block
    );
    onChange(newBlocks);
  };

  return (
    <div className="space-y-4">
      {blocks.map((block, index) => (
        <div
          key={block.id}
          className={`p-4 bg-white rounded-lg shadow ${
            selectedBlock === index ? 'ring-2 ring-blue-500' : ''
          }`}
          onClick={() => setSelectedBlock(index)}
          draggable
          onDragStart={(e) => {
            e.dataTransfer.setData('text/plain', index.toString());
          }}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            e.preventDefault();
            const fromIndex = parseInt(e.dataTransfer.getData('text/plain'), 10);
            moveBlock(fromIndex, index);
          }}
        >
          <div className="flex items-center justify-between mb-2">
            <span className="font-medium text-gray-700">{block.type}</span>
            <button
              onClick={() => {
                const newBlocks = blocks.filter((_, i) => i !== index);
                onChange(newBlocks);
              }}
              className="text-red-500 hover:text-red-700"
            >
              Remove
            </button>
          </div>
          <textarea
            value={JSON.stringify(block.content, null, 2)}
            onChange={(e) => {
              try {
                const content = JSON.parse(e.target.value);
                updateBlock(index, content);
              } catch (error) {
                // Invalid JSON, ignore
              }
            }}
            className="w-full h-32 p-2 font-mono text-sm border rounded"
          />
        </div>
      ))}
      <button
        onClick={() => {
          onChange([
            ...blocks,
            {
              id: crypto.randomUUID(),
              type: 'text',
              content: { text: 'New block' },
            },
          ]);
        }}
        className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-600"
      >
        Add Block
      </button>
    </div>
  );
}