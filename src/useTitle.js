import React, { useEffect } from 'react';

const useTitle = (title) => {
useEffect(()=>{
    document.title = `${title} - Toy Verse`
},[title])
};

export default useTitle;