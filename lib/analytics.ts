import {
  trackDownloadClick as gaDownloadClick,
  trackFaqExpand as gaFaqExpand,
  trackScrollDepth as gaScrollDepth,
  trackSectionView as gaSectionView,
} from '@/lib/gtag'
import { metaTrack, metaTrackCustom } from '@/lib/meta-pixel'

export type ScrollDepth = 25 | 50 | 75 | 100

export function trackDownloadClick(label: string) {
  gaDownloadClick(label)
  metaTrack('Lead', {
    content_name: label,
    content_category: 'app_store_click',
  })
}

export function trackScrollDepth(depth: ScrollDepth) {
  gaScrollDepth(depth)
  metaTrackCustom('ScrollDepth', { content_name: `${depth}%`, value: depth })
  if (depth === 50) {
    metaTrack('ViewContent', {
      content_name: 'landing_page',
      content_category: 'engaged_scroll',
    })
  }
}

export function trackSectionView(section: string) {
  gaSectionView(section)
  metaTrackCustom('SectionView', { content_name: section })
}

export function trackFaqExpand(question: string) {
  gaFaqExpand(question)
  metaTrackCustom('FaqExpand', { content_name: question })
}
