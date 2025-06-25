type ImageVersionType = 'LARGE' | 'MEDIUM' | 'MICRO' | 'SMALL';

export type ImageVersions = {
  [key in ImageVersionType]: string;
};

export interface UserImage {
  link: string | null;
  versions: ImageVersions;
}
