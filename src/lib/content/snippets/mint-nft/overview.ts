import { ContentTypeEnum } from '$lib/types/content/metadata/content-types.enum';
import { SubjectsEnum } from '$lib/types/content/metadata/subject.enum';
import type { SnippetOverview } from '$lib/types/content/snippet.interface';

export const overview: SnippetOverview = {
  title: 'Mint an NFT in Cadence',
  contentType: ContentTypeEnum.Snippet,
  author: {
    name: 'Jacob Tucker',
    socialMediaUrl: 'https://twitter.com/jacobmtucker',
    avatarUrl: 'https://avatars.githubusercontent.com/u/15198786?v=4',
    isVerified: true,
    walletAddress: '0x99bd48c8036e2876'
  },
  excerpt: 'Learn how to mint an NFT in Cadence using the example Avataaars contract.',
  metadata: {
    subjects: [SubjectsEnum.Cadence]
  },
  codeLink: 'https://run.ecdao.org?code=aW1wb3J0IEF2YXRhYWFycyBmcm9tIDB4Y2I5YTgxMjczN2JiYzY3OQoKdHJhbnNhY3Rpb24oKSB7CgogIGxldCBDb2xsZWN0aW9uOiAmQXZhdGFhYXJzLkNvbGxlY3Rpb24KCiAgcHJlcGFyZShzaWduZXI6IEF1dGhBY2NvdW50KSB7CiAgICAvLyBpZiB0aGUgc2lnbmVyIGRvZXMgbm90IGhhdmUgYW4gQXZhdGFhYXJzIGNvbGxlY3Rpb24gc2V0IHVwLCB0aGVuIGRvIHRoYXQgaGVyZQogICAgaWYgc2lnbmVyLmJvcnJvdzwmQXZhdGFhYXJzLkNvbGxlY3Rpb24%2BKGZyb206IEF2YXRhYWFycy5Db2xsZWN0aW9uU3RvcmFnZVBhdGgpID09IG5pbCB7CiAgICAgIC8vIHNhdmUgdGhlIEF2YXRhYWFycyBjb2xsZWN0aW9uIHRvIHN0b3JhZ2UKICAgICAgc2lnbmVyLnNhdmUoPC0gQXZhdGFhYXJzLmNyZWF0ZUVtcHR5Q29sbGVjdGlvbigpLCB0bzogQXZhdGFhYXJzLkNvbGxlY3Rpb25TdG9yYWdlUGF0aCkKICAgICAgLy8gbGluayBpdCB0byB0aGUgcHVibGljIHNvIHBlb3BsZSBjYW4gcmVhZCBkYXRhIGZyb20gaXQKICAgICAgc2lnbmVyLmxpbms8JkF2YXRhYWFycy5Db2xsZWN0aW9ue0F2YXRhYWFycy5BdmF0YWFhcnNDb2xsZWN0aW9uUHVibGljLCBOb25GdW5naWJsZVRva2VuLlJlY2VpdmVyLCBOb25GdW5naWJsZVRva2VuLkNvbGxlY3Rpb25QdWJsaWMsIE1ldGFkYXRhVmlld3MuUmVzb2x2ZXJDb2xsZWN0aW9ufT4oQXZhdGFhYXJzLkNvbGxlY3Rpb25QdWJsaWNQYXRoLCB0YXJnZXQ6IEF2YXRhYWFycy5Db2xsZWN0aW9uU3RvcmFnZVBhdGgpCiAgICB9CgogICAgc2VsZi5Db2xsZWN0aW9uID0gc2lnbmVyLmJvcnJvdzwmQXZhdGFhYXJzLkNvbGxlY3Rpb24%2BKGZyb206IEF2YXRhYWFycy5Db2xsZWN0aW9uU3RvcmFnZVBhdGgpIQogIH0KCiAgZXhlY3V0ZSB7CiAgICAvLyBib3Jyb3cgdGhlIHB1YmxpYyBtaW50ZXIsIHdoaWNoIGFsbG93cyBhbnlvbmUgdG8gbWludAogICAgbGV0IG1pbnRlcjogJntBdmF0YWFhcnMuTWludGVyUHVibGljfSA9IEF2YXRhYWFycy5ib3Jyb3dNaW50ZXIoKQogICAgLy8gbWludCB0aGUgTkZUCiAgICBtaW50ZXIubWludE5GVChjb2xsZWN0aW9uOiBzZWxmLkNvbGxlY3Rpb24pCiAgfQp9&network=mainnet&args=e30%3D'
};