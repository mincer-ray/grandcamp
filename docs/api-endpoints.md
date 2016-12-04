# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users`
- `GET /api/users/:id` - gets page for artist

### Session

- `POST /api/session`
- `DELETE /api/session`

### Albums

- `GET /api/albums`
- `POST /api/albums`
- `PATCH /api/albums/:id`
- Edits both album and song attributes
- `GET /api/albums/:id`
- `DELETE /api/albums/:id`

### Songs[Albums]

- `GET /api/albums/:id/songs`
- `POST /api/albums/:id/songs`
- `DELETE /api/albums/:id/songs/:id`

### Tags

- `GET /api/tags`
- `POST /api/album/:album_id/tags`
- `DELETE /api/album/:album_id/tags/:tag_name`
