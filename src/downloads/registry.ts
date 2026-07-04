export interface DownloadEntry {
  id: string
  name: string
  description: string
  file: string
  size: string
  path: string
}

export interface DownloadPlatform {
  title: string
  downloads: DownloadEntry[]
}

export const downloadPlatforms: DownloadPlatform[] = [
  {
    title: 'Linux',
    downloads: [
      {
        id: 'debian',
        name: 'Debian / Ubuntu',
        description: 'aham_1.0.0_amd64.deb',
        file: 'aham_1.0.0_amd64.deb',
        size: '197 KB',
        path: '/artifacts/debian/aham_1.0.0_amd64.deb',
      },
      {
        id: 'rpm',
        name: 'Fedora / RHEL',
        description: 'Aham-1.0.0-Linux.rpm',
        file: 'Aham-1.0.0-Linux.rpm',
        size: '203 KB',
        path: '/artifacts/rpm/Aham-1.0.0-Linux.rpm',
      },
      {
        id: 'linux-tarball',
        name: 'Generic tarball',
        description: 'Aham-1.0.0-Linux.tar.gz',
        file: 'Aham-1.0.0-Linux.tar.gz',
        size: '196 KB',
        path: '/artifacts/linux/Aham-1.0.0-Linux.tar.gz',
      },
    ],
  },
  {
    title: 'macOS',
    downloads: [
      {
        id: 'mac-dmg',
        name: 'macOS (Darwin)',
        description: 'Aham-1.0.0-Darwin.dmg',
        file: 'Aham-1.0.0-Darwin.dmg',
        size: '161 KB',
        path: '/artifacts/mac/Aham-1.0.0-Darwin.dmg',
      },
    ],
  },
  {
    title: 'Windows',
    downloads: [
      {
        id: 'windows-exe',
        name: 'Windows (x64)',
        description: 'Aham-1.0.0-win64.exe',
        file: 'Aham-1.0.0-win64.exe',
        size: '346 KB',
        path: '/artifacts/windows/Aham-1.0.0-win64.exe',
      },
    ],
  },
]
