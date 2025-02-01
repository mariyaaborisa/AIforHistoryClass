import React from 'react';
import { Mic, Video, MessageSquare, Settings } from 'lucide-react';

const InterfaceMockup = () => {
  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      {/* Header */}
      <div className="border-b pb-4 mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Historical Avatar Interface</h1>
        <p className="text-gray-600">Currently speaking with: George Moses Horton</p>
      </div>

      {/* Main Content */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* Video Display */}
        <div className="bg-gray-100 rounded-lg p-4">
          <div className="aspect-video bg-gray-200 rounded-lg flex items-center justify-center mb-4">
            <Video className="w-12 h-12 text-gray-400" />
          </div>
          <p className="text-sm text-gray-600 text-center">Avatar Response Video</p>
        </div>

        {/* Controls */}
        <div className="space-y-6">
          {/* Recording Section */}
          <div className="bg-gray-50 rounded-lg p-4">
            <div className="flex items-center justify-center mb-4">
              <button className="p-4 bg-blue-500 rounded-full hover:bg-blue-600 transition-colors">
                <Mic className="w-6 h-6 text-white" />
              </button>
            </div>
            <p className="text-center text-sm text-gray-600">Click to start recording</p>
          </div>

          {/* Conversation History */}
          <div className="bg-gray-50 rounded-lg p-4">
            <h3 className="font-medium mb-2">Conversation History</h3>
            <div className="space-y-2">
              <div className="bg-blue-50 p-2 rounded">
                <p className="text-sm">You: Tell me about your poetry.</p>
              </div>
              <div className="bg-gray-100 p-2 rounded">
                <p className="text-sm">George Moses Horton: My poetry was my voice...</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Settings Bar */}
      <div className="mt-6 pt-4 border-t flex justify-between items-center">
        <div className="flex gap-4">
          <button className="text-gray-600 hover:text-gray-800">
            <Settings className="w-5 h-5" />
          </button>
          <button className="text-gray-600 hover:text-gray-800">
            <MessageSquare className="w-5 h-5" />
          </button>
        </div>
        <p className="text-sm text-gray-500">System Status: Ready</p>
      </div>
    </div>
  );
};

export default InterfaceMockup;