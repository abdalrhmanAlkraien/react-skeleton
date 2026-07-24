import { create } from 'zustand'

const getInitialLang = () => {
  return localStorage.getItem('migfora_lang') || 'en'
}

const applyLang = (lang) => {
  document.documentElement.setAttribute('lang', lang)
  document.documentElement.setAttribute('dir', lang === 'ar' ? 'rtl' : 'ltr')
  localStorage.setItem('migfora_lang', lang)
}

const useLanguageStore = create((set) => {
  const initial = getInitialLang()
  applyLang(initial)

  return {
    lang: initial,

    toggleLang: () => {
      set((state) => {
        const next = state.lang === 'en' ? 'ar' : 'en'
        applyLang(next)
        return { lang: next }
      })
    },

    setLang: (lang) => {
      applyLang(lang)
      set({ lang })
    },
  }
})

export default useLanguageStore