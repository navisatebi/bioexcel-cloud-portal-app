export interface BiotoolsApplicationTopic {
  uri: string;
  term: string;
}

export interface BiotoolsApplicationDownload {
  url: string;
  comment: string;
  type: string;
}

export interface BiotoolsApplication {
  id: string;
  name: string;
  versionId: string;
  homepage: string;
  description: string;
  topic: BiotoolsApplicationTopic[];
  toolType: string[];
  download: BiotoolsApplicationDownload[];
}

