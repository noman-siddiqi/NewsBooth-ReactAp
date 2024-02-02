import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {Route, Routes } from 'react-router-dom'

export default class App extends Component {
  apiKey = '634e344befe244b898882b9cdad40fa6'
  pageSize = 15;
  render() {
    return (
      <div>
        <Navbar />
        <Routes>
            <Route exact path="/general" element={<News key="general" pageSize={this.pageSize} country="us" category='general' apiKey={this.apiKey}/>}/>
            <Route exact path="business" element={<News key="business" pageSize={this.pageSize} country="us" category='business' apiKey={this.apiKey}/>}/>
            <Route exact path="entertainment" element={<News key="entertainment" pageSize={this.pageSize} country="us" category='entertainment' apiKey={this.apiKey}/>}/>
            <Route exact path="health" element={<News key="health" pageSize={this.pageSize} country="us" category='health' apiKey={this.apiKey}/>}/>
            <Route exact path="science" element={<News key="science" pageSize={this.pageSize} country="us" category='science' apiKey={this.apiKey}/>}/>
            <Route exact path="sports" element={<News key="sports" pageSize={this.pageSize} country="us" category='sports' apiKey={this.apiKey}/>}/>
            <Route exact path="technology" element={<News key="technology" pageSize={this.pageSize} country="us" category='technology' apiKey={this.apiKey}/>}/>
        </Routes>
      </div>
    )
  }
}