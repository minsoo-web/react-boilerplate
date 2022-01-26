import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const signIn = createAsyncThunk<any, any>(
  "auth/signIn",
  async (payload, { rejectWithValue }) => {
    try {
      const { data } = await axios.post<{}>("someURL", payload, {});

      return data;
    } catch (error) {
      console.log(error);
      return rejectWithValue(error);
    }
  }
);
