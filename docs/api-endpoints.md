# API Endpoints

## HTML API

### Root

- `GET /` - loads React web app

## JSON API

### Users

- `POST /api/users`
- `PATCH /api/users` - update artist info
- `GET /api/users/:id` - gets page for artist

### Session

- `POST /api/session`
- `DELETE /api/session`

### Albums

- `GET /api/albums` - Index
- `POST /api/albums`
- `PATCH /api/albums/:id` - Edits both album and song attributes
- `GET /api/albums/:id`
- `DELETE /api/albums/:id`

### Songs[Nested Under Albums]

- `GET /api/albums/:id/songs`
- `POST /api/albums/:id/songs`
- `DELETE /api/songs/:id`

### Tags[Bonus]

- `GET /api/tags`
- `POST /api/album/:album_id/tags`
- `DELETE /api/tags/:tag_name`
