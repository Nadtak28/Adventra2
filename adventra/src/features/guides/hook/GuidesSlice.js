import { createSlice } from "@reduxjs/toolkit";
import { GuidesService } from "../api/guidesService";
import { OneGuideService } from "../api/oneGuideService";
const GuidesSlice = createSlice({
  name: "guides",
  initialState: {
    list: [],
    loadingList: false,
    errorList: null,

    detail: null,
    loadingDetail: false,
    errorDetail: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(GuidesService.pending, (state) => {
        state.loadingList = true;
        state.errorList = null;
      })
      .addCase(GuidesService.fulfilled, (state, action) => {
        state.loadingList = false;
        state.list = action.payload.data;  
      })
      .addCase(GuidesService.rejected, (state, action) => {
        state.loadingList = false;
        state.errorList = action.payload;
      })

      .addCase(OneGuideService.pending, (state) => {
        state.loadingDetail = true;
        state.errorDetail = null;
      })
      .addCase(OneGuideService.fulfilled, (state, action) => {
        state.loadingDetail = false;
        state.detail = action.payload;
      })
      .addCase(OneGuideService.rejected, (state, action) => {
        state.loadingDetail = false;
        state.errorDetail = action.payload;
      });
  },
});

export default GuidesSlice.reducer;
