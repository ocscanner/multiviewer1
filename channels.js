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
        type: "NBC News",
        url: "https://www.nbcnews.com/watch"
      },
      {
        name: "ABC News (National)",
        type: "iframe",
        url: "https://abcnews.go.com/Live"
      },
      {
        name: "FOX Weather",
        type: "youtube",
        url: "https://www.youtube.com/embed/wt6SIE7BXS8?autoplay=1&mute=1&playsinline=1"
      },
      {
        name: "Newsmax",
        type: "native",
        url: "<iframe width="560" height="315" src="https://www.youtube.com/embed/a5ziak3vuug?si=UvArETSd6JuEIHfV" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>"
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
  }
};
