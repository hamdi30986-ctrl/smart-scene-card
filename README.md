# Smart Scene Card

<img width="522" height="136" alt="image" src="https://github.com/user-attachments/assets/5674fb95-6b44-44ba-96ea-ff9a2aabb76b" />

A powerful custom Lovelace card for Home Assistant that creates intelligent, one-touch scene controls with smart automation features.

## Features

### 🎯 One-Touch Toggle
- **Activate**: Tap to turn on all entities with your configured settings
- **Deactivate**: Tap again to turn everything off (covers reverse direction)
- **Visual Feedback**: Glowing teal indicator shows when scene is active

### 💡 Light Smart Mode
- **Night Exit Delay**: Keep lights on for X seconds after deactivating at night
- **Skip if Covers Opening**: Don't turn on lights during daytime when covers are opening

### ❄️ Climate Smart Mode
- **Temperature-Based Activation**: Only turn on AC when room temp exceeds threshold
- **Dynamic Fan Speed**: Automatically adjust fan based on temperature
- **Sensor Integration**: Uses any temperature sensor for decisions

### 🪟 Cover Smart Mode
- **Daytime Only**: Covers only open during daytime (sun above horizon)
- **Reverse on Deactivate**: Covers automatically reverse position when scene turns off

### 🔊 Media Player Smart Mode
- **Welcome TTS**: Play a greeting when scene activates
- **Goodbye TTS**: Play a farewell when scene deactivates
- **Volume Control**: Set specific volume level for the scene

### 🔘 Switch/Toggle Smart Mode
- **Conditional Skip**: Skip activation based on another entity's state
- **Dynamic State Options**: State options adapt to entity type (climate, cover, media player, etc.)

### ✨ Active Glow Control
- **Per-Entity Control**: Choose which entities affect the active button indicator
- **Glow Checkbox**: Each entity has a "Glow" toggle in the header

### 🔍 Long-Press Tracking
- **Hold 3 seconds**: Opens a status modal showing all entities
- **Real-time Status**: ✅ Match, ❌ Mismatch, ⏭️ Skipped (smart mode)
- **Detailed Info**: Shows expected vs actual values for each entity

---

## Installation

### HACS (Recommended)
1. Open HACS in Home Assistant
2. Click the 3 dots menu → **Custom repositories**
3. Add your repository URL and select **Lovelace** as category
4. Search for "Smart Scene Card" and install

### Manual Installation
1. Download `smart-scene-card.js`.
2. Copy to your Home Assistant's `/config/www/` folder
3. Add the resource in **Settings → Dashboards → Resources**:
   ```yaml
   URL: /local/smart-scene-card.js
   Type: JavaScript Module
   ```
4. Restart Home Assistant or clear browser cache

---

## Usage

### Add the Card
1. Edit your dashboard
2. Click **Add Card** → Search for "Smart Scene Card"
3. Configure your scene name and icon
4. Add entities and configure their settings

### Basic Configuration
```yaml
type: custom:smart-scene-card
name: Movie Night
icon: mdi:movie
entities:
  - entity_id: light.living_room
    brightness: 20
  - entity_id: cover.curtains
    position: 0
  - entity_id: media_player.tv
    volume: 50
```

### Smart Mode Examples

#### Light with Night Exit Delay
```yaml
- entity_id: light.bedroom
  brightness: 100
  exit_delay: 30          # Keep on 30s at night
  skip_if_covers_open: true
```

#### Climate with Temperature Sensor
```yaml
- entity_id: climate.bedroom_ac
  temperature: 22
  hvac_mode: cool
  temperature_sensor: sensor.bedroom_temp
  min_temp_threshold: 27    # Below = no AC
  high_temp_threshold: 30   # Above = high fan
  fan_mode_low: low
  fan_mode_high: high
```

#### Cover Daytime Only
```yaml
- entity_id: cover.curtains
  position: 100
  only_daytime: true
```

#### Media Player with TTS
```yaml
- entity_id: media_player.speaker
  volume: 40
  welcome_tts: true
  welcome_message: "Welcome home!"
  goodbye_tts: true
  goodbye_message: "Goodbye!"
  tts_service: tts.google_en_com
```

#### Switch with Conditional Skip
```yaml
- entity_id: switch.humidifier
  skip_if_entity: climate.ac
  skip_if_state: "off"    # Only run if AC is on
```

---

## Configuration Options

### Card Options
| Option | Type | Default | Description |
|--------|------|---------|-------------|
| `name` | string | - | Scene name displayed on card |
| `icon` | string | `mdi:lightbulb-group` | Icon for the scene |
| `hide_name` | boolean | `false` | Hide the scene name |
| `hide_icon` | boolean | `false` | Hide the scene icon |
| `icon_size` | number | `24` | Icon size in pixels |

### Entity Options
| Option | Type | Description |
|--------|------|-------------|
| `entity_id` | string | Required. Entity ID |
| `include_in_active` | boolean | Include in active glow detection (default: true) |

#### Light Options
| Option | Type | Description |
|--------|------|-------------|
| `brightness` | number | Brightness 0-100% |
| `rgb_color` | array | RGB color [R, G, B] |
| `color_temp` | number | Color temperature in mireds |
| `exit_delay` | number | Seconds to delay off at night |
| `skip_if_covers_open` | boolean | Skip if covers opening during day |

#### Climate Options
| Option | Type | Description |
|--------|------|-------------|
| `temperature` | number | Target temperature |
| `hvac_mode` | string | HVAC mode (cool, heat, etc.) |
| `temperature_sensor` | string | Temp sensor entity for smart mode |
| `min_temp_threshold` | number | Below this = skip AC |
| `high_temp_threshold` | number | Above this = high fan |
| `fan_mode_low` | string | Fan mode for moderate temp |
| `fan_mode_high` | string | Fan mode for high temp |

#### Cover Options
| Option | Type | Description |
|--------|------|-------------|
| `position` | number | Cover position 0-100% |
| `only_daytime` | boolean | Only open during daytime |

#### Media Player Options
| Option | Type | Description |
|--------|------|-------------|
| `volume` | number | Volume 0-100% |
| `welcome_tts` | boolean | Enable welcome TTS |
| `welcome_message` | string | Message on activate |
| `goodbye_tts` | boolean | Enable goodbye TTS |
| `goodbye_message` | string | Message on deactivate |
| `tts_service` | string | TTS service entity |

#### Switch/Toggle Options
| Option | Type | Description |
|--------|------|-------------|
| `skip_if_entity` | string | Entity to check state of |
| `skip_if_state` | string | Skip if entity is in this state |

---

## License
MIT
