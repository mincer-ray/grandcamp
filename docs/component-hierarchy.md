## Component Hierarchy

**HomeContainer**
- Home
+ NavBar

**NavBar**
- Search

**SearchResultsContainer**
- AlbumIndex

**AuthFormContainer**
- AuthForm

**New/EditAlbumContainer**
+ AlbumForm

**AlbumForm**
- SongForm

**EditArtistContainer**
- ArtistForm

**ArtistContainer**
- ArtistHeader
- ArtistSidebar
+ AlbumIndex

**AlbumIndex**
- AlbumIndexItem

**AlbumContainer**
- AlbumInfo
+ SongIndex

**SongIndex**
- SongIndexItem


**BONUS**

**Discover**
- TagIndex

**DiscoverTag**
+ AlbumIndex

**NewTag**
- TagForm

## Routes

|Path   | Component   |
|-------|-------------|
| "/" | "HomeContainer" |
| "/sign-up" | "AuthFormContainer" |
| "/sign-in" | "AuthFormContainer" |
| "/search-results" | "SearchResultsContainer"
| "/new-album" | "NewAlbumContainer" |
| "/edit-artist" | "EditArtistContainer" |
| "/artist/:artistId" | "ArtistContainer" |
| "/artist/:artistId/album/:albumId" | "AlbumContainer" |
| "/artist/:artistId/album/:albumId/edit-album" | "EditAlbumContainer" |
|
| BONUS
| "/discover" | "DiscoverContainer" |
| "/discover/tag/:tagId" | "TagContainer" |
| "/new-tag" | "NewTag" |
