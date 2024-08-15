export const modules = {
  toolbar: [
    [{ 'font': [] }], // Font family dropdown
    [{ 'header': [1, 2, 3, 4, 5, 6, false] }], // Header size options
    ['bold', 'italic', 'underline', 'strike'], // Bold, italic, underline, strikethrough
    [{ 'color': [] }, { 'background': [] }], // Text color and background color
    [{ 'script': 'sub' }, { 'script': 'super' }], // Subscript / superscript
    [{ 'list': 'ordered' }, { 'list': 'bullet' }], // Ordered and bullet lists
    [{ 'indent': '-1' }, { 'indent': '+1' }], // Indent and outdent
    [{ 'align': [] }], // Text alignment options
    ['link', 'image'], // Link and image insertion
    [{ 'blockquote': true }, { 'code-block': true }], // Blockquote and code block
    ['clean'], // Clear formatting button
  ],
};

export const formats = [
  'font', 'header',
  'bold', 'italic', 'underline', 'strike',
  'color', 'background',
  'script', 'sub', 'super',
  'list', 'bullet', 'indent',
  'align',
  'link', 'image',
  'blockquote', 'code-block',
];