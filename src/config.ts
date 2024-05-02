import type { PostHideElements } from '~/content/config';

export const Site = 'https://saga.github.io';
export const SiteLanguage = 'zh';
export const SiteTitle = `Saga's blog`;
export const SiteDescription = 'A technical blog';
export const FooterDescription = 'Code is poetry';
export const AdminName = 'Ladit';
export const PageSize = 15;

// socialPlatform => userName
// check components/Header.astro socialConfig for more info
export const Socials: Record<string, Record<string, string>> = {
	github: { url: 'https://github.com/saga' },
	rss: { url: '/rss.xml' },
};

// doc: https://giscus.app
// data-theme is auto changed between noborder_light / noborder_gray
export const GiscusConfig: Record<string, string> = {
	'data-repo': 'saga/saga.github.io',
	'data-repo-id': 'R_kgDOL1_U2Q',
	'data-category': 'Announcements',
	'data-category-id': 'DIC_kwDOL1_U2c4CfFQz',
	'data-mapping': 'title',
	'data-strict': '0',
	'data-reactions-enabled': '1',
	'data-emit-metadata': '0',
	'data-input-position': 'top',
	'data-lang': 'en',
	'data-loading': 'lazy',
	crossorigin: 'anonymous',
	async: '',
};

export type HideElements =
	| PostHideElements
	| 'logo'
	| 'search'
	| 'themeToggler'
	| 'siteDescription'
	| 'footerDescription';
// Always hide elements from site
export const Hide: HideElements[] = [];
