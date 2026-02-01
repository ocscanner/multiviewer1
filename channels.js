window.APP_CONFIG = {
  title: "OC Scanner • Multiviewer"
};

window.CHANNEL_GROUPS = {
  local: {
    label: "Local News",
    channels: [
      {
        name: "FOX (Local)",
        type: "youtube",
        url: "https://www.youtube.com/embed/8u8pQ_uLGjo?autoplay=1&mute=1&playsinline=1"
      },
      {
        name: "ABC7 Los Angeles (Official)",
        type: "youtube",
        url: "https://www.youtube.com/embed/s3iVFJoxrYc?si=Ci8jUjHc6TR0xCTl&autoplay=1&mute=1&playsinline=1"
      },
      {
        name: "NBC Los Angeles (Official)",
        type: "iframe",
        url: "https://www.nbclosangeles.com/watch/"
      }
    ]
  },

  national: {
    label: "National News",
    channels: [
      {
        name: "NBC News (Live)",
        type: "youtube",
        url: "https://www.youtube.com/embed/MINldxbTOSI?si=XOdOYXSKJrmdpNG8&autoplay=1&mute=1&playsinline=1"
      },
      {
        name: "ABC News (National)",
        type: "youtube",
        url: "https://www.youtube.com/embed/1qSichtfkjk?autoplay=1&mute=1&playsinline=1"
      },
      {
        name: "FOX Weather",
        type: "youtube",
        url: "https://www.youtube.com/embed/wt6SIE7BXS8?autoplay=1&mute=1&playsinline=1"
      },
      {
        name: "Newsmax",
        type: "youtube",
        url: "https://www.youtube.com/embed/1PBghQXi8TA?si=HCSHzeDjaBsOo5jK&autoplay=1&mute=1&playsinline=1"
      }
    ]
  },

  other: {
    label: "Aviation",
    channels: [
      {
        name: "LAX Runways Cam 24",
        type: "youtube",
        url: "https://www.youtube.com/embed/VjqKog3XwZ8?autoplay=1&mute=1&playsinline=1"
      },
      {
        name: "LAX Runways Cam 25",
        type: "youtube",
        url: "https://www.youtube.com/embed/UQaSS4_VAV4?autoplay=1&mute=1&playsinline=1"
      },
      {
        name: "LAS Airport",
        type: "youtube",
        url: "https://www.youtube.com/embed/cn8_34TuMaM?si=uL5HnJYR0lWCzzjI&autoplay=1&mute=1&playsinline=1"
      }
    ]
  },

  basicWebsite: {
    label: "Basic Website - Social & Weather",
    channels: [
      {
        name: "X (Twitter) Feed",
        type: "iframe",
        url: "https://syndication.twitter.com/srv/timeline-profile/screen-name/Twitter?dnt=false&embedId=twitter-widget-0&features=eyJ0ZndfdGltZWxpbmVfbGlzdCI6eyJidWNrZXQiOltdLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X2ZvbGxvd2VyX2NvdW50X3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9iYWNrZW5kIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19yZWZzcmNfc2Vzc2lvbiI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfZm9zbnJfc29mdF9pbnRlcnZlbnRpb25zX2VuYWJsZWQiOnsiYnVja2V0Ijoib24iLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X21peGVkX21lZGlhXzE1ODk3Ijp7ImJ1Y2tldCI6InRyZWF0bWVudCIsInZlcnNpb24iOm51bGx9LCJ0ZndfZXhwZXJpbWVudHNfY29va2llX2V4cGlyYXRpb24iOnsiYnVja2V0IjoxMjA5NjAwLCJ2ZXJzaW9uIjpudWxsfSwidGZ3X3Nob3dfYmlyZGhkYXlfdmlzaWJpbGl0eV9lbmFibGVkIjp7ImJ1Y2tldCI6Im9uIiwidmVyc2lvbiI6bnVsbH0sInRmd19kdXBsaWNhdGVfc2NyaWJlc190b19zZXR0aW5ncyI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdXNlX3Byb2ZpbGVfaW1hZ2Vfc2hhcGVfZW5hYmxlZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9LCJ0ZndfdmlkZW9faGxzX2R5bmFtaWNfbWFuaWZlc3RzXzE1MDgyIjp7ImJ1Y2tldCI6InRydWVfYml0cmF0ZSIsInZlcnNpb24iOm51bGx9LCJ0ZndfbGVnYWN5X3RpbWVsaW5lX3N1bnNldCI6eyJidWNrZXQiOnRydWUsInZlcnNpb24iOm51bGx9LCJ0ZndfdHdlZXRfZWRpdF9mcm9udGVuZCI6eyJidWNrZXQiOiJvbiIsInZlcnNpb24iOm51bGx9fQ%3D%3D&frame=false&hideCard=false&hideThread=false&lang=en&origin=https%3A%2F%2Ftwitter.com%2Ftwitter&sessionId=fc91d2e7f9e0d2c5c1b1a0e0d2c5c1b1a0e0d2c5&theme=dark&widgetsVersion=2615f7e52b7e0%3A1702314776716&width=550px"
      },
      {
        name: "Instagram Feed",
        type: "iframe",
        url: "https://www.instagram.com/instagram/embed/"
      },
      {
        name: "Local Weather (LA)",
        type: "iframe",
        url: "https://embed.windy.com/embed2.html?lat=34.052&lon=-118.244&detailLat=34.052&detailLon=-118.244&width=650&height=450&zoom=10&level=surface&overlay=wind&product=ecmwf&menu=&message=true&marker=&calendar=now&pressure=&type=map&location=coordinates&detail=&metricWind=default&metricTemp=default&radarRange=-1"
      }
    ]
  }
};
