# 🌦️ Weather Dashboard Application

A responsive and interactive weather dashboard built using **React.js** and **Open-Meteo APIs**.
This project provides both **current weather insights** and **historical weather analytics** with rich visualizations.

---

## 🚀 Features

### 📍 Page 1: Current Weather & Hourly Forecast

* 🌡️ **Temperature** (Current, Min, Max)
* 🌦️ **Atmospheric Conditions**

  * Precipitation
  * Relative Humidity
  * UV Index
* 🌅 **Sun Cycle**

  * Sunrise & Sunset
* 🌬️ **Wind & Air**

  * Wind Speed
  * Precipitation Probability
* 🌫️ **Air Quality Metrics**

  * PM10, PM2.5
  * CO, NO2, SO2
* 📈 **Hourly Temperature Chart**
* 🔍 **Zoom Feature (Brush)** for better data analysis

---

### 📊 Page 2: Historical Weather

* 📅 Custom **Date Range Selection**
* 🌡️ Temperature Trends (Min / Max)
* 🌅 Sunrise & Sunset Trends
* 🌧️ Precipitation Analysis
* 🌬️ Wind Speed & Direction
* 🔍 Scrollable + Zoomable charts

---

## 🛠️ Tech Stack

* ⚛️ React.js
* 📊 Recharts (for charts & data visualization)
* 🌐 Open-Meteo API (Weather & Air Quality)
* 🎨 CSS / Bootstrap (UI styling)

---

## ⚡ Performance Optimizations

* ⏱️ Fast initial render with **loading state**
* 🔄 Parallel API calls using `Promise.all()`
* 📉 Optimized chart rendering
* 📱 Responsive layout with smooth scrolling

---

## 🌍 APIs Used

### Weather Data:

https://api.open-meteo.com/v1/forecast

### Historical Data:

https://archive-api.open-meteo.com/v1/archive

### Air Quality Data:

https://air-quality-api.open-meteo.com/v1/air-quality

---

## 📦 Installation & Setup

```bash
# Clone the repository
git clone https://github.com/MrAjayGangwar2001/weather-dashboard.git

# Navigate to project folder
cd weather-dashboard

# Install dependencies
npm install

# Run the app
npm run dev
```

---

## 📁 Project Structure

```
src/
 ├── components/
 │    ├── charts/
 │
 ├── pages/
 │    ├── CurrentWeather.jsx
 │    ├── HistoricalWeather.jsx
 │
 ├── App.jsx
 └── main.jsx
```

---

## 🎯 Key Highlights

* ✅ Clean and modular code structure
* ✅ Fully dynamic API-based data
* ✅ Interactive charts with zoom & scroll
* ✅ Real-world production-like UI
* ✅ Handles edge cases (loading, errors, validation)

---

## 📌 Future Enhancements

* 🌍 City search functionality
* 🌙 Dark mode support
* 📥 Export data (CSV)
* 📊 More advanced analytics

---

## 👨‍💻 Author

**Ajay Gangwar**
📧 [gangwar030@gmail.com](mailto:gangwar030@gmail.com)
📱 9720576210

---

## ⭐ Conclusion

This project demonstrates strong understanding of:

* API integration
* Data visualization
* React component architecture
* Performance optimization

---

💡 *Built as part of a technical assignment to showcase frontend development skills.*
