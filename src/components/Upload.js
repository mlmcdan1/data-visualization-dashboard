import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setData } from '../features/dataSlice';
import * as XLSX from 'xlsx';

function Upload() {
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const handleFileUpload = (e) => {
    const file = e.target.files[0];
    setFile(file);
  };

  const handleFileSubmit = () => {
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, { type: 'array' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const json = XLSX.utils.sheet_to_json(sheet);
      dispatch(setData(json));
    };
    reader.readAsArrayBuffer(file);
  };

  return (
    <div className="upload">
      <input type="file" onChange={handleFileUpload} />
      <button onClick={handleFileSubmit}>Upload</button>
    </div>
  );
}

export default Upload;
