var APP_DATA = {
  "scenes": [
    {
      "id": "0-area-mirante",
      "name": "Igreja dos Reis Magos"",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.0850078193121746,
          "pitch": -0.07326103949791118,
          "rotation": 0,
          "target": "1-area-igreja"
        },
        {
          "yaw": -1.6649494251294428,
          "pitch": 1.4739393656417406,
          "rotation": 0,
          "target": "2-mirante"
        },
        {
          "yaw": -0.623653476157493,
          "pitch": 0.6590650130354412,
          "rotation": 0,
          "target": "4-igreja-reis-magos---leste"
        },
        {
          "yaw": 0.4687602863823912,
          "pitch": 0.7873764355956272,
          "rotation": 0,
          "target": "6-igreja-reis-magos---oeste"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-area-igreja",
      "name": "Aérea igreja",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        },
        {
          "tileSize": 512,
          "size": 4096
        }
      ],
      "faceSize": 3000,
      "initialViewParameters": {
        "yaw": 0.00008081339999321813,
        "pitch": 0,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -2.9580355507168417,
          "pitch": 0.6694992782672067,
          "rotation": 0,
          "target": "5-igreja-reis-magos---sul"
        },
        {
          "yaw": -2.677693746228167,
          "pitch": 0.42423200614470247,
          "rotation": 0,
          "target": "4-igreja-reis-magos---leste"
        },
        {
          "yaw": 2.9498897087058165,
          "pitch": 0.45267143658547937,
          "rotation": 0,
          "target": "6-igreja-reis-magos---oeste"
        },
        {
          "yaw": -3.1082524998771746,
          "pitch": -0.10616852045828473,
          "rotation": 0,
          "target": "0-area-mirante"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-mirante",
      "name": "mirante",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -0.09666860002982602,
        "pitch": 0.31412447558401624,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.29190671872721197,
          "pitch": 0.2634229550154963,
          "rotation": 0,
          "target": "3-igreja-reis-magos---norte"
        },
        {
          "yaw": -0.8638970764515665,
          "pitch": 0.14391055323054402,
          "rotation": 0,
          "target": "4-igreja-reis-magos---leste"
        },
        {
          "yaw": 0.43195222332980343,
          "pitch": 0.12624349926801592,
          "rotation": 0,
          "target": "6-igreja-reis-magos---oeste"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-igreja-reis-magos---norte",
      "name": "Igreja Reis Magos - Norte",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -2.699890158588648,
        "pitch": 0.2126859651659867,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": 0.4190196367375485,
          "pitch": 0.1490527126491088,
          "rotation": 0,
          "target": "2-mirante"
        },
        {
          "yaw": 2.577486303894423,
          "pitch": 0.048199653725998104,
          "rotation": 0.7853981633974483,
          "target": "4-igreja-reis-magos---leste"
        },
        {
          "yaw": -1.803169534361297,
          "pitch": 0.14370772195293036,
          "rotation": 5.497787143782138,
          "target": "6-igreja-reis-magos---oeste"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-igreja-reis-magos---leste",
      "name": "Igreja Reis Magos - Leste",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": -1.3605703100750048,
        "pitch": 0.13494605168355278,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.8424705235523664,
          "pitch": 0.05439172077074872,
          "rotation": 0.7853981633974483,
          "target": "5-igreja-reis-magos---sul"
        },
        {
          "yaw": 1.0653316658744902,
          "pitch": 0.11046775724724966,
          "rotation": 1.5707963267948966,
          "target": "3-igreja-reis-magos---norte"
        },
        {
          "yaw": 1.3295287254377204,
          "pitch": 0.11228293187913074,
          "rotation": 0,
          "target": "2-mirante"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-igreja-reis-magos---sul",
      "name": "Igreja Reis Magos - Sul",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "yaw": 0.16293875244358347,
        "pitch": -0.11767799828381698,
        "fov": 1.325599857056214
      },
      "linkHotspots": [
        {
          "yaw": -0.6605341697118146,
          "pitch": 0.08840004469643148,
          "rotation": 0.7853981633974483,
          "target": "6-igreja-reis-magos---oeste"
        },
        {
          "yaw": 1.3098685325225858,
          "pitch": 0.01438674522063721,
          "rotation": 5.497787143782138,
          "target": "4-igreja-reis-magos---leste"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-igreja-reis-magos---oeste",
      "name": "Igreja Reis Magos - Oeste",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 1472,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.0409663696781877,
          "pitch": 0.06930965685304713,
          "rotation": 0.7853981633974483,
          "target": "2-mirante"
        },
        {
          "yaw": 1.5602814869140325,
          "pitch": 0.06300398362868087,
          "rotation": 5.497787143782138,
          "target": "5-igreja-reis-magos---sul"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "ReisMagos",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": true,
    "viewControlButtons": true
  }
};
