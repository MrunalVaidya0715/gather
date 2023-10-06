"use client";

import CreateServerModal from "@/components/modals/CreateServerModal";
import { useEffect, useState } from "react";

export const ModalProvider = () => {
    const [isMounted, SetIsMounted] = useState(false);
    useEffect(()=>{
        SetIsMounted(true)
    },[])

    if(!isMounted){
        return null;
    }
    
  return (
    <>
      <CreateServerModal />
    </>
  );
};
