import './App.css';

import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {Route, Routes } from 'react-router-dom'
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component { 
  apiKey = process.env.REACT_APP_NEWS_API
  pageSize = 15;
  state = {
    progress: 10
  }
  setProgress = (progress) =>{
    this.setState({progress: progress});
  }
  render() {
    return (
      <div>
        <Navbar />
        <LoadingBar
        color='#f11946'
        height={3}
        progress={this.state.progress}
      />
        <Routes>
            <Route exact path="/general" element={<News setProgress={this.setProgress} key="general" pageSize={this.pageSize} country="us" category='general' apiKey={this.apiKey}/>}/>
            <Route exact path="business" element={<News setProgress={this.setProgress} key="business" pageSize={this.pageSize} country="us" category='business' apiKey={this.apiKey}/>}/>
            <Route exact path="entertainment" element={<News setProgress={this.setProgress} key="entertainment" pageSize={this.pageSize} country="us" category='entertainment' apiKey={this.apiKey}/>}/>
            <Route exact path="health" element={<News setProgress={this.setProgress} key="health" pageSize={this.pageSize} country="us" category='health' apiKey={this.apiKey}/>}/>
            <Route exact path="science" element={<News setProgress={this.setProgress} key="science" pageSize={this.pageSize} country="us" category='science' apiKey={this.apiKey}/>}/>
            <Route exact path="sports" element={<News setProgress={this.setProgress} key="sports" pageSize={this.pageSize} country="us" category='sports' apiKey={this.apiKey}/>}/>
            <Route exact path="technology" element={<News setProgress={this.setProgress} key="technology" pageSize={this.pageSize} country="us" category='technology' apiKey={this.apiKey}/>}/>
        </Routes>
      </div>
    )
  }
}