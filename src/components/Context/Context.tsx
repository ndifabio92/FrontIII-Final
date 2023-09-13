import { createContext, useContext, useState } from 'react';

type ColorContextType = {
    backgroundColor: string;
    toggleBackgroundColor: () => void;
};

type Props = {
    children: JSX.Element
}

const ColorContext = createContext<ColorContextType | undefined>(undefined);

export const useColorContext = () => {
    const context = useContext(ColorContext);
    if (!context) {
        throw new Error('useColorContext debe usarse dentro de un ColorProvider');
    }
    return context;
};

export const ColorProvider = ({ children }: Props) => {
    const [isWhiteBackground, setIsWhiteBackground] = useState<boolean>(true);

    const toggleBackgroundColor = () => {
        setIsWhiteBackground((prev) => !prev);
    };

    const backgroundColor = isWhiteBackground ? '#FFFFFF' : '#000000';

    return (
        <ColorContext.Provider value={{ backgroundColor, toggleBackgroundColor }}>
            {children}
        </ColorContext.Provider>
    );
};
