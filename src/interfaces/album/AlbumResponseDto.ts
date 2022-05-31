export interface AlbumResponseDto {
  albumImage: string;
  albumTitle: string;
  albumDate: Date;
  albumScope: number;
  numberPeople: number;
  singerName: string;
  singerImage: string;
  likeNumber: number;
  singNumber: number;
  albumTime: string;
  albumSing: Array<object>;
  singName: string;
  singTime: string;
  albumType: string;
  albumGenre: string;
  albumCompany: string;
  company: string;
  albumContent: string;
}
