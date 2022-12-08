import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';

import { createHostel, updateHostel } from '../actions/hostels'

export const Post = () => {
    const [postData, setPostData] = useState({
         name: '', type: '', ratingsAverage: 1, ratingQuantity: 0,
         price: 0, roomsAvailable: 0, closeBy: false, imageCover: '',
         summary: '', images: [], location: ''});
    const hostel = useSelector((state) => (currentId ? state.hostels.find((hostel) => hostel.id === currentId) : null));
    const dispatch = useDispatch();

    useEffect(() => {
      if (hostel) setPostData(hostel);
    }, [hostel]);

    const clear = () => {
      setCurrentId(null);
      setPostData({
        name: '', type: '', ratingsAverage: 1, ratingQuantity: 0,
        price: 0, roomsAvailable: 0, closeBy: false, imageCover: '',
        summary: '', images: [], location: ''});
      }

    const handleSubmit = async (e) => {
      e.preventDefault();

      if (currentId === 0) {
        dispatch(createHostel(postData));
        clear();
      } else {
        dispatch(updateHostel(currentId, postData));
        clear();
      }
    };

    return (
      <section className="">
        <form autoComplete="off" noValidate className="" onSubmit={handleSubmit}>
          <h3>{currentId ? `Editing "${hostel.name}"` : 'Creating a Hostel'}</h3>
          <div className="col-span-6 sm:col-span-4">
            <label htmlFor="name">
                <input type="text" name="name" value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </label>
          </div>
          <div className="col-span-6 sm:col-span-4">
            <label htmlFor="type">
                <input type="text" name="type" value={postData.type} onChange={(e) => setPostData({ ...postData, type: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </label>
          </div>
          <div className="col-span-6 sm:col-span-4">
            <label htmlFor="ratingsAverage">
                <input type="text" name="ratingsAverage" value={postData.ratingsAverage} onChange={(e) => setPostData({ ...postData, ratingsAverage: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </label>
          </div>
          <div className="col-span-6 sm:col-span-4">
            <label htmlFor="ratingQuantity">
                <input type="text" name="ratingQuantity" value={postData.ratingQuantity} onChange={(e) => setPostData({ ...postData, ratingQuantity: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </label>
          </div>
          <div className="col-span-6 sm:col-span-4">
            <label htmlFor="price">
                <input type="text" name="price" value={postData.price} onChange={(e) => setPostData({ ...postData, price: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </label>
          </div>
          <div className="col-span-6 sm:col-span-4">
            <label htmlFor="roomsAvailable">
                <input type="text" name="roomsAvailable" value={postData.roomsAvailable} onChange={(e) => setPostData({ ...postData, roomsAvailable: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </label>
          </div>
          <div className="col-span-6 sm:col-span-4">
            <label htmlFor="closeBy">
                <input type="text" name="closeBy" value={postData.closeBy} onChange={(e) => setPostData({ ...postData, closeBy: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </label>
          </div>
          <div className="col-span-6 sm:col-span-4">
            <label htmlFor="summary">
                <input type="text" name="summary" value={postData.summary} onChange={(e) => setPostData({ ...postData, summary: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </label>
          </div>
          <div className="col-span-6 sm:col-span-4">
            <label htmlFor="imageCover">
                <FileBase type="file" multiple={false} onDone={({ base64 }) => setPostData({ ...postData, imageCover: base64 })} />
            </label>
          </div>
          <div className="col-span-6 sm:col-span-4">
            <label htmlFor="images">
                <FileBase type="file" multiple={true} onDone={({ base64 }) => setPostData({ ...postData, images: images.push(base64) })} />
            </label>
          </div>
          <div className="col-span-6 sm:col-span-4">
            <label htmlFor="name">
                <input type="text" name="name" value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </label>
          </div>
          <div className="col-span-6 sm:col-span-4">
            <label htmlFor="name">
                <input type="text" name="name" value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </label>
          </div>
          <div className="col-span-6 sm:col-span-4">
            <label htmlFor="name">
                <input type="text" name="name" value={postData.name} onChange={(e) => setPostData({ ...postData, name: e.target.value })} className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"/>
            </label>
            </div>
          <button className="" variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</button>
          <button variant="contained" color="secondary" size="small" onClick={clear} fullWidth>Clear</button>
        </form>
      </section>
    );
}
