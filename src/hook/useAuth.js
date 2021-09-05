import React, {useState, useEffect} from "react";

import {useUI} from "../context";

const useAuth = () => {
  const [ui, dispatch] = useUI();
  const [loading, setLoading] = useState(true);
  const user = null;

  useEffect(() => {
    (async () => {

    })()
  }, [])

  return [user, loading];
}

export default useAuth;