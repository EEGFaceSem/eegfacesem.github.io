const copyButton = document.getElementById('copy-citation');
copyButton.addEventListener('click', async () => {
  const citation = document.getElementById('citation');
  const status = document.getElementById('copy-status');
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(citation.textContent.trim());
      status.textContent = 'BibTeX copied.';
      return;
    } catch (error) {
      status.textContent = 'Clipboard access is unavailable. The citation is selected; press Ctrl+C (or Cmd+C) to copy.';
    }
  } else {
    status.textContent = 'The citation is selected; press Ctrl+C (or Cmd+C) to copy.';
  }
  const range = document.createRange();
  range.selectNodeContents(citation);
  const selection = window.getSelection();
  selection.removeAllRanges();
  selection.addRange(range);
});
