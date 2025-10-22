export const formatEmbeddedStyles = (input: string) => {
  if (!input) {
    return ''
  }

  return (
    input
      // Replace fv:word_word with <span class="cicipu-text">word word</span>
      .replace(/fv:([a-zA-Z\u00C0-\u017F_]+)/g, (_, term) => {
        const text = term.replace(/_/g, ' ')
        return `<span class="cicipu-text">${text}</span>`
      })
      // Replace fi:word_word with <span class="national-text">word word</span>
      .replace(/fi:([a-zA-Z\u00C0-\u017F_]+)/g, (_, term) => {
        const text = term.replace(/_/g, ' ')
        return `<span class="national-text">${text}</span>`
      })
  )
}
