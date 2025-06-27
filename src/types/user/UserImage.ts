type ImageVersionType = 'large' | 'medium' | 'micro' | 'small';

export type ImageVersions = {
  [key in ImageVersionType]: string;
};

export interface UserImage {
  link: string | null;
  versions: ImageVersions;
}
