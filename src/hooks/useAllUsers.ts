import { useState, useCallback } from "react";
import axios from "axios";
import { User } from "../types/api/User";
import {useMessage}from "./useMessage";

export const useAllUsers = () => {
const {showMessage}=useMessage();

  const [loading, setLoading] = useState(false);
  const [users, setUsers] = useState<Array<User>>([]);
  const getUsers = useCallback(() => {
    setLoading(true);
    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data) )
      .catch(() => {
        showMessage({title:"ユーザ認証に失敗しました",status:"error"})
      }).finally(()=>{
        setLoading(false);
      });
  }, [showMessage]);
  return { getUsers ,loading,users};
};
