import { createSlice } from "@reduxjs/toolkit";
import { EventsService } from "../api/eventsService";
import { OneEventService } from "../api/oneEventService";

const EventsSlice = createSlice({
  name: "events",
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
      .addCase(EventsService.pending, (state) => {
        state.loadingList = true;
        state.errorList = null;
      })
      .addCase(EventsService.fulfilled, (state, action) => {
        state.loadingList = false;
        state.list = action.payload.data;  // make sure this matches your API response structure
      })
      .addCase(EventsService.rejected, (state, action) => {
        state.loadingList = false;
        state.errorList = action.payload;
      })

      .addCase(OneEventService.pending, (state) => {
        state.loadingDetail = true;
        state.errorDetail = null;
      })
      .addCase(OneEventService.fulfilled, (state, action) => {
        state.loadingDetail = false;
        state.detail = action.payload;
      })
      .addCase(OneEventService.rejected, (state, action) => {
        state.loadingDetail = false;
        state.errorDetail = action.payload;
      });
  },
});

export default EventsSlice.reducer;
