import React, { useState } from 'react';
import { Save, Plus, Trash2, Edit3 } from 'lucide-react';
import { defaultCategories } from '../data/mockData';
import { WebsiteCategory } from '../types';

export const CategorySettings: React.FC = () => {
  const [categories, setCategories] = useState<WebsiteCategory[]>(defaultCategories);
  const [newDomain, setNewDomain] = useState('');
  const [newCategory, setNewCategory] = useState<'productive' | 'unproductive' | 'neutral'>('productive');
  const [editingId, setEditingId] = useState<string | null>(null);

  const addCategory = () => {
    if (newDomain.trim()) {
      const newCat: WebsiteCategory = {
        domain: newDomain.trim().toLowerCase(),
        category: newCategory,
        customized: true
      };
      setCategories([...categories, newCat]);
      setNewDomain('');
    }
  };

  const removeCategory = (domain: string) => {
    setCategories(categories.filter(cat => cat.domain !== domain));
  };

  const updateCategory = (domain: string, newCat: 'productive' | 'unproductive' | 'neutral') => {
    setCategories(categories.map(cat => 
      cat.domain === domain 
        ? { ...cat, category: newCat, customized: true }
        : cat
    ));
  };

  const getCategoryColor = (category: string) => {
    switch (category) {
      case 'productive':
        return 'bg-green-100 text-green-800';
      case 'unproductive':
        return 'bg-red-100 text-red-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-lg font-semibold text-gray-800 mb-6">Website Categories</h3>

      {/* Add New Category */}
      <div className="bg-gray-50 rounded-lg p-4 mb-6">
        <h4 className="font-medium text-gray-700 mb-3">Add New Website</h4>
        <div className="flex space-x-3">
          <input
            type="text"
            placeholder="example.com"
            value={newDomain}
            onChange={(e) => setNewDomain(e.target.value)}
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <select
            value={newCategory}
            onChange={(e) => setNewCategory(e.target.value as any)}
            className="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="productive">Productive</option>
            <option value="unproductive">Unproductive</option>
            <option value="neutral">Neutral</option>
          </select>
          <button
            onClick={addCategory}
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 flex items-center space-x-2"
          >
            <Plus className="w-4 h-4" />
            <span>Add</span>
          </button>
        </div>
      </div>

      {/* Categories List */}
      <div className="space-y-3 max-h-96 overflow-y-auto">
        {categories.map((cat) => (
          <div
            key={cat.domain}
            className="flex items-center justify-between p-3 border border-gray-200 rounded-lg hover:bg-gray-50"
          >
            <div className="flex items-center space-x-3">
              <span className="font-medium text-gray-800">{cat.domain}</span>
              {cat.customized && (
                <span className="text-xs text-blue-600 bg-blue-100 px-2 py-1 rounded">
                  Custom
                </span>
              )}
            </div>
            
            <div className="flex items-center space-x-3">
              <select
                value={cat.category}
                onChange={(e) => updateCategory(cat.domain, e.target.value as any)}
                className={`text-xs px-2 py-1 rounded border-0 ${getCategoryColor(cat.category)}`}
              >
                <option value="productive">Productive</option>
                <option value="unproductive">Unproductive</option>
                <option value="neutral">Neutral</option>
              </select>
              
              {cat.customized && (
                <button
                  onClick={() => removeCategory(cat.domain)}
                  className="p-1 text-red-600 hover:bg-red-100 rounded"
                >
                  <Trash2 className="w-4 h-4" />
                </button>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* Save Button */}
      <div className="mt-6 pt-4 border-t">
        <button className="w-full bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 flex items-center justify-center space-x-2">
          <Save className="w-4 h-4" />
          <span>Save Categories</span>
        </button>
      </div>
    </div>
  );
};