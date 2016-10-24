export interface BiotoolsApplicationTopic {
  uri: string;
  term: string;
}

export interface BiotoolsApplication {
  id: string;
  name: string;
  versionId: string;
  homepage: string;
  description: string;
  topic: BiotoolsApplicationTopic[];
  resourceType: string[];
}

