import React, { useState } from 'react';
import { 
  FileText, Users, CheckCircle, FileBarChart, Search, Plus, Eye, Download, 
  Edit, Trash2, X, Upload as UploadIcon, AlertTriangle
} from 'lucide-react';

// Documents Tab Component
const DocumentsTab = ({ companies }) => {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // Document management state
  const [showUploadModal, setShowUploadModal] = useState(false);
  const [uploadForm, setUploadForm] = useState({
    companyName: '',
    category: 'financial',
    file: null
  });
  const [isUploading, setIsUploading] = useState(false);
  const [uploadError, setUploadError] = useState('');

  // Documents state
  const [documents, setDocuments] = useState([
    { id: 1, name: 'Jar - Financial Statements FY24', category: 'financial', company: 'Jar', date: '2024-03-31', size: '2.4 MB', type: 'PDF' },
    { id: 2, name: 'hBits - Board Resolution Q4', category: 'board', company: 'hBits', date: '2024-03-15', size: '1.2 MB', type: 'PDF' },
    { id: 3, name: 'High Avenue - Investment Agreement', category: 'legal', company: 'High Avenue', date: '2024-02-28', size: '3.1 MB', type: 'PDF' },
    { id: 4, name: 'Monrow - Compliance Report', category: 'compliance', company: 'Monrow', date: '2024-03-20', size: '1.8 MB', type: 'PDF' },
    { id: 5, name: 'Seekho - Due Diligence Report', category: 'financial', company: 'Seekho', date: '2024-03-10', size: '4.2 MB', type: 'PDF' },
    { id: 6, name: 'BizzTM - Series A Term Sheet', category: 'legal', company: 'BizzTM', date: '2024-01-15', size: '0.8 MB', type: 'PDF' },
    { id: 7, name: 'Nojoto - Annual Board Meeting Minutes', category: 'board', company: 'Nojoto', date: '2024-02-05', size: '1.5 MB', type: 'PDF' }
  ]);

  const documentCategories = [
    { id: 'all', name: 'All Documents', icon: FileText },
    { id: 'financial', name: 'Financial', icon: FileBarChart },
    { id: 'legal', name: 'Legal', icon: FileText },
    { id: 'compliance', name: 'Compliance', icon: CheckCircle },
    { id: 'board', name: 'Board Materials', icon: Users }
  ];

  // Upload handlers
  const handleUploadClick = () => {
    setShowUploadModal(true);
    setUploadError('');
    setUploadForm({
      companyName: '',
      category: 'financial',
      file: null
    });
  };

  const handleCloseModal = () => {
    setShowUploadModal(false);
    setUploadForm({
      companyName: '',
      category: 'financial',
      file: null
    });
    setUploadError('');
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Validate file size (max 10MB)
      if (file.size > 10 * 1024 * 1024) {
        setUploadError('File size must be less than 10MB');
        return;
      }
      
      // Validate file type
      const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document', 'image/jpeg', 'image/png'];
      if (!allowedTypes.includes(file.type)) {
        setUploadError('Please upload PDF, DOC, DOCX, JPG, or PNG files only');
        return;
      }

      setUploadForm(prev => ({ ...prev, file }));
      setUploadError('');
    }
  };

  const handleUploadSubmit = async (e) => {
    e.preventDefault();
    
    // Validation
    if (!uploadForm.companyName.trim()) {
      setUploadError('Please enter a company name');
      return;
    }
    
    if (!uploadForm.file) {
      setUploadError('Please select a file to upload');
      return;
    }

    setIsUploading(true);
    setUploadError('');

    try {
      // Simulate upload process (replace with actual API call)
      await new Promise(resolve => setTimeout(resolve, 2000));

      // Create new document object
      const newDocument = {
        id: documents.length + 1,
        name: `${uploadForm.companyName} - ${uploadForm.file.name}`,
        category: uploadForm.category,
        company: uploadForm.companyName,
        date: new Date().toISOString().split('T')[0],
        size: (uploadForm.file.size / (1024 * 1024)).toFixed(1) + ' MB',
        type: uploadForm.file.type.includes('pdf') ? 'PDF' : 
              uploadForm.file.type.includes('word') ? 'DOC' : 
              uploadForm.file.type.includes('image') ? 'IMG' : 'FILE'
      };

      // Add to documents list at the beginning (most recent first)
      setDocuments(prev => [newDocument, ...prev]);
      
      // Close modal and reset form
      handleCloseModal();
      
      // Optional: Show success message
      alert('Document uploaded successfully!');
      
    } catch (error) {
      setUploadError('Upload failed. Please try again.');
      console.error('Upload error:', error);
    } finally {
      setIsUploading(false);
    }
  };

  const filteredDocuments = documents.filter(doc => {
    const matchesCategory = selectedCategory === 'all' || doc.category === selectedCategory;
    const matchesSearch = doc.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.company.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-slate-900">Document Management</h1>
        <p className="text-slate-600 mt-2">Centralized repository for all portfolio company documents</p>
      </div>

      {/* Document Categories and Search */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl p-6 border border-slate-200 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-2">
            {documentCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                  selectedCategory === category.id
                    ? 'bg-blue-500 text-white'
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                <category.icon size={16} />
                <span>{category.name}</span>
              </button>
            ))}
          </div>
          
          <div className="flex items-center space-x-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={20} />
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <button 
              onClick={handleUploadClick}
              className="flex items-center space-x-2 px-4 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors"
            >
              <Plus size={16} />
              <span>Upload</span>
            </button>
          </div>
        </div>
      </div>

      {/* Documents Grid */}
      <div className="bg-white/80 backdrop-blur-lg rounded-2xl border border-slate-200">
        <div className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold text-slate-900">
              Documents ({filteredDocuments.length})
            </h3>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-slate-200">
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Document Name</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Company</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Category</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Date</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Size</th>
                  <th className="text-left py-3 px-4 font-semibold text-slate-700">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filteredDocuments.map((doc) => (
                  <tr key={doc.id} className="border-b border-slate-100 hover:bg-slate-50">
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-3">
                        <FileText className="w-5 h-5 text-red-500" />
                        <span className="font-medium text-slate-900">{doc.name}</span>
                      </div>
                    </td>
                    <td className="py-3 px-4 text-slate-600">{doc.company}</td>
                    <td className="py-3 px-4">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        doc.category === 'financial' ? 'bg-blue-100 text-blue-800' :
                        doc.category === 'legal' ? 'bg-purple-100 text-purple-800' :
                        doc.category === 'compliance' ? 'bg-emerald-100 text-emerald-800' :
                        'bg-orange-100 text-orange-800'
                      }`}>
                        {doc.category}
                      </span>
                    </td>
                    <td className="py-3 px-4 text-slate-600">{doc.date}</td>
                    <td className="py-3 px-4 text-slate-600">{doc.size}</td>
                    <td className="py-3 px-4">
                      <div className="flex items-center space-x-2">
                        <button className="text-blue-600 hover:text-blue-800 text-sm">
                          <Eye size={16} />
                        </button>
                        <button className="text-emerald-600 hover:text-emerald-800 text-sm">
                          <Download size={16} />
                        </button>
                        <button className="text-slate-600 hover:text-slate-800 text-sm">
                          <Edit size={16} />
                        </button>
                        <button className="text-red-600 hover:text-red-800 text-sm">
                          <Trash2 size={16} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Upload Modal */}
      {showUploadModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-2xl max-w-md w-full max-h-[90vh] overflow-hidden">
            <div className="p-6 border-b border-slate-200">
              <div className="flex items-center justify-between">
                <h2 className="text-xl font-bold text-slate-900">Upload Document</h2>
                <button
                  onClick={handleCloseModal}
                  className="p-2 hover:bg-slate-100 rounded-lg transition-colors"
                  disabled={isUploading}
                >
                  <X size={20} />
                </button>
              </div>
            </div>
            
            <form onSubmit={handleUploadSubmit} className="p-6">
              <div className="space-y-4">
                {/* Company Name */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Company Name *
                  </label>
                  <select
                    value={uploadForm.companyName}
                    onChange={(e) => setUploadForm(prev => ({ ...prev, companyName: e.target.value }))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    disabled={isUploading}
                  >
                    <option value="">Select a company</option>
                    {companies.map((company, index) => (
                      <option key={index} value={company.name}>
                        {company.name}
                      </option>
                    ))}
                    <option value="Other">Other (Custom)</option>
                  </select>
                  
                  {/* If "Other" is selected, show text input */}
                  {uploadForm.companyName === 'Other' && (
                    <input
                      type="text"
                      placeholder="Enter company name"
                      onChange={(e) => setUploadForm(prev => ({ ...prev, companyName: e.target.value }))}
                      className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent mt-2"
                      required
                      disabled={isUploading}
                    />
                  )}
                </div>

                {/* Category */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Document Category *
                  </label>
                  <select
                    value={uploadForm.category}
                    onChange={(e) => setUploadForm(prev => ({ ...prev, category: e.target.value }))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    required
                    disabled={isUploading}
                  >
                    <option value="financial">Financial</option>
                    <option value="legal">Legal</option>
                    <option value="compliance">Compliance</option>
                    <option value="board">Board Materials</option>
                  </select>
                </div>

                {/* File Upload */}
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-2">
                    Select Document *
                  </label>
                  <div className="border-2 border-dashed border-slate-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                    <input
                      type="file"
                      onChange={handleFileChange}
                      accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
                      className="hidden"
                      id="file-upload"
                      disabled={isUploading}
                    />
                    <label htmlFor="file-upload" className="cursor-pointer">
                      <UploadIcon size={40} className="mx-auto text-slate-400 mb-2" />
                      <p className="text-sm text-slate-600 mb-1">
                        {uploadForm.file ? uploadForm.file.name : "Click to select a file or drag & drop"}
                      </p>
                      <p className="text-xs text-slate-500">
                        Supports: PDF, DOC, DOCX, JPG, PNG (max 10MB)
                      </p>
                    </label>
                  </div>
                </div>

                {/* Error Message */}
                {uploadError && (
                  <div className="p-3 bg-red-50 border border-red-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                      <span className="text-sm text-red-700">{uploadError}</span>
                    </div>
                  </div>
                )}

                {/* Upload Progress */}
                {isUploading && (
                  <div className="p-3 bg-blue-50 border border-blue-200 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-blue-600"></div>
                      <span className="text-sm text-blue-700">Uploading document...</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Modal Actions */}
              <div className="flex items-center justify-end space-x-3 mt-6 pt-4 border-t border-slate-200">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-4 py-2 text-slate-600 hover:text-slate-800 transition-colors"
                  disabled={isUploading}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  disabled={isUploading || !uploadForm.companyName || !uploadForm.file}
                  className="px-6 py-2 bg-emerald-500 text-white rounded-lg hover:bg-emerald-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-2"
                >
                  {isUploading ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white"></div>
                      <span>Uploading...</span>
                    </>
                  ) : (
                    <>
                      <UploadIcon size={16} />
                      <span>Upload Document</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default DocumentsTab;