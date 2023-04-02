import { transformNewsData, transformNewsMeta } from '@/transforms/news';

describe('transformNewsData', () => {
	test('given res = null', () => {
		expect(transformNewsData(null)).toEqual({
			id: '',
			body: null,
			headline: '',
			sectionId: '',
			thumbnail: null,
			webPublicationDate: '',
			webTitle: '',
		});
	});

	test('given a real data', () => {
		const news = {
			id: 'news/2023/apr/01/for-the-record',
			type: 'article',
			sectionId: 'news',
			sectionName: 'News',
			webPublicationDate: '2023-04-01T22:00:03Z',
			webTitle: 'Mykonos | John Askey | For the record',
			webUrl: 'https://www.theguardian.com/news/2023/apr/01/for-the-record',
			apiUrl: 'https://content.guardianapis.com/news/2023/apr/01/for-the-record',
			fields: {
				headline: 'For the record',
				body: '<p>• An attack on a Greek archaeologist, which was thought to be linked to “out-of-control” building construction on Mykonos, took place in Athens, as an article reported, not on the island itself as the headline may have suggested (“<a href="https://www.theguardian.com/world/2023/mar/26/violence-in-greece-over-efforts-to-preserve-ancient-heritage-of-mykonos" title="">Violence hits Greece’s party island over bid to preserve ancient heritage</a>”, 26 March, p5).</p> <p>• John Askey is the manager of Hartlepool United, not Rochdale, as we mistakenly said in last week’s English Football League Championship <a href="https://www.theguardian.com/football/2023/mar/25/football-league-roundup-peterborough-close-on-playoffs-with-win-over-derby" title="">roundup column</a> (Sport, p15).</p> <p>Other recently amended articles include:</p> <p><a href="https://www.theguardian.com/media/2023/mar/26/labour-vows-to-secure-bbcs-independence-after-lineker-row" title="">Labour vows to ‘secure BBC’s independence’ after Lineker row</a></p> <p><a href="https://www.theguardian.com/culture/2023/mar/19/the-best-free-spring-culture-in-britain-chosen-by-observer-critics" title="">The best free spring culture in Britain, chosen by <em>Observer</em> critics</a></p> <p><a href="https://www.theguardian.com/science/2023/mar/26/does-the-future-of-medicine-lie-in-space" title="">Does the future of medicine lie in space?</a></p> <p><a href="https://www.theguardian.com/commentisfree/2023/mar/26/ignore-detractors-keir-starmer-radical-transform-country" title="">Ignore the detractors – Keir Starmer is a radical who can transform the country</a></p> <p><em>• Write to the Readers’ Editor, the </em>Observer<em>, York Way, London N1 9GU, email observer.readers@observer.co.uk, tel 020 3353 4736</em></p>',
			},
			isHosted: false,
			pillarId: 'pillar/news',
			pillarName: 'News',
		};

		expect(transformNewsData(news)).toEqual({
			id: 'news/2023/apr/01/for-the-record',
			body: '<p>• An attack on a Greek archaeologist, which was thought to be linked to “out-of-control” building construction on Mykonos, took place in Athens, as an article reported, not on the island itself as the headline may have suggested (“<a href="https://www.theguardian.com/world/2023/mar/26/violence-in-greece-over-efforts-to-preserve-ancient-heritage-of-mykonos" title="">Violence hits Greece’s party island over bid to preserve ancient heritage</a>”, 26 March, p5).</p> <p>• John Askey is the manager of Hartlepool United, not Rochdale, as we mistakenly said in last week’s English Football League Championship <a href="https://www.theguardian.com/football/2023/mar/25/football-league-roundup-peterborough-close-on-playoffs-with-win-over-derby" title="">roundup column</a> (Sport, p15).</p> <p>Other recently amended articles include:</p> <p><a href="https://www.theguardian.com/media/2023/mar/26/labour-vows-to-secure-bbcs-independence-after-lineker-row" title="">Labour vows to ‘secure BBC’s independence’ after Lineker row</a></p> <p><a href="https://www.theguardian.com/culture/2023/mar/19/the-best-free-spring-culture-in-britain-chosen-by-observer-critics" title="">The best free spring culture in Britain, chosen by <em>Observer</em> critics</a></p> <p><a href="https://www.theguardian.com/science/2023/mar/26/does-the-future-of-medicine-lie-in-space" title="">Does the future of medicine lie in space?</a></p> <p><a href="https://www.theguardian.com/commentisfree/2023/mar/26/ignore-detractors-keir-starmer-radical-transform-country" title="">Ignore the detractors – Keir Starmer is a radical who can transform the country</a></p> <p><em>• Write to the Readers’ Editor, the </em>Observer<em>, York Way, London N1 9GU, email observer.readers@observer.co.uk, tel 020 3353 4736</em></p>',
			headline: 'For the record',
			sectionId: 'news',
			thumbnail: null,
			webPublicationDate: '2023-04-01T22:00:03Z',
			webTitle: 'Mykonos | John Askey | For the record',
		});
	});
});

describe('transformNewsMeta', () => {
	test('given res = null', () => {
		expect(transformNewsMeta(null)).toEqual({
			currentPage: 0,
			orderBy: '',
			pages: 0,
			pageSize: 0,
			startIndex: 0,
			total: 0,
		});
	});

	test('given a real data', () => {
		const meta = {
			status: 'ok',
			userTier: 'developer',
			total: 27238,
			startIndex: 1,
			pageSize: 8,
			currentPage: 1,
			pages: 3405,
			orderBy: 'newest',
		};

		expect(transformNewsMeta(meta)).toEqual({
			currentPage: 1,
			orderBy: 'newest',
			pages: 3405,
			pageSize: 8,
			startIndex: 1,
			total: 27238,
		});
	});
});
