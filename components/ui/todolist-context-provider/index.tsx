import {  createContext, useContext, useState } from "react";

export type List ={
    title: string;
    description: string;
    completed: boolean;
    id: string;
    isFavorite?: boolean;
}
type ListContextType ={
    lists: List[];
    addList: (tdList: List) => void;
    updateList: (id: string, updatedList: Partial<List>) => void;
    toggleFavorite: (id: string) => void;
}

const ListContext = createContext<ListContextType | undefined>(undefined);

export const ListProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [lists, setLists] = useState<List[]>([]);
    
    const addList = (list: List) => {
        setLists((prev) => [...prev, list]);
    };

    const updateList = (id: string, updatedList: Partial<List>) => {
        setLists((prev) =>
            prev.map((list) =>
                list.id === id ? { ...list, ...updatedList } : list
            )
        );
    };

    const toggleFavorite = (id: string) => {
        setLists((prev) =>
            prev.map((list) =>
                list.id === id ? { ...list, isFavorite: !list.isFavorite } : list
            )
        );
    };
    return (
        <ListContext.Provider value={{ lists, addList, updateList, toggleFavorite }}>
            {children}
        </ListContext.Provider>
    );
}

export const useListContext = () => {
    const context = useContext(ListContext);
    if (!context) {
        throw new Error("useListContext must be used within a ListProvider");
    }
    return context;
};
