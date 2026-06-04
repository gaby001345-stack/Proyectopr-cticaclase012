import AsyncStorage from "@react-native-async-storage/async-storage";
import { I18n } from "i18n-js";
import { createContext, useContext, useEffect, useState } from "react";

//1 tipado de objeto principal del contexto
type Language = 'es'|'en';


type LanguageContextType = {
    language: Language;
    changeLanguaje: (lng: Language) => void;
}

//definición de diccionarios
const translations = {
    en: {signIn: 'Sign in', goToSettings: 'Go to settings', welcome:"Welcome Home!"},
    es: {signIn: 'Iniciar sesión', goToSettings: 'Ir a User Settings', welcome:"¡Bienvenido a Home!"}
};

//Crear instancia de i18n con diccionario cargado
const i18n = new I18n(translations);

//Definir propiedades como idioma por defecto, habilitar fallback
//2. Creacion del contexto
const LanguageContext = createContext<LanguageContextType | null>(null);

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) throw new Error ("useLanguage debe usarse dentro de LanguageProvider");
    return context;
}
//3 crear el provider: medio por el cual se maneja el estado global
export const LanguageProvider = ({children}: {children: React.ReactNode}) => {
    //inicializacion de estado con valor por defecto
    const [language, setLanguage] = useState<Language|null>(null);

    useEffect(() => {
        const loadLanguage = async () => {
            const storedLanguage = await AsyncStorage.getItem('language');
            if (storedLanguage) {
                setLanguage(storedLanguage as Language);
                i18n.locale = storedLanguage;
            }else {
                i18n.locale = i18n.defaultLocale;
            }
        };
        loadLanguage();
    }, [language]);
    
    const changeLanguaje =  async (lng: Language) => {
    setLanguage(lng);
    i18n.locale = lng;
    await AsyncStorage.setItem('language', lng);
  };
  
  return(
    <LanguageContext.Provider value={{language, changeLanguaje}}>
        {children}
    </LanguageContext.Provider>
 );
}

export {i18n};