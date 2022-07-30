// Generated by https://quicktype.io

export interface FootballScoresMatchListData {
  meta: FootballScoresMatchListDataMeta;
  payload: Payload[];
}

export interface FootballScoresMatchListDataMeta {
  pollFrequencyInMilliseconds: number;
}

export interface Payload {
  meta: PayloadMeta;
  body: Body;
}

export interface Body {
  fixtureListMeta: FixtureListMeta;
  matchData: MatchDatum[];
}

export interface FixtureListMeta {
  scorersButtonShouldBeEnabled: boolean;
}

export interface MatchDatum {
  tournamentMeta: TournamentMeta;
  tournamentDatesWithEvents: TournamentDatesWithEvents;
}

export interface TournamentDatesWithEvents {
  //   "Wednesday-3rd-March": March[];
  //   "Saturday-6th-March": March[];
  //   "Saturday-13th-March": March[];
  //   "Wednesday-17th-March": March[];
  //   "Saturday-20th-March": March[];
  [key: string]: MatchDay[];
}

export interface MatchDay {
  round: Round;
  events: Event[];
}

export interface Event {
  eventKey: string;
  startTime: string;
  isTBC: boolean;
  minutesElapsed: number;
  minutesIntoAddedTime: number;
  eventStatus: string;
  eventStatusNote: string;
  eventStatusReason: null;
  eventOutcomeType: string;
  eventType: string;
  seriesWinner: null;
  cpsId: string;
  cpsLive: string;
  homeTeam: Team;
  awayTeam: Team;
  eventProgress: EventProgress;
  venue: Venue;
  officials: any[];
  tournamentInfo: string;
  eventActions: string;
  startTimeInUKHHMM: string;
  comment: string;
  href: string;
  tournamentName: Name;
  tournamentSlug: string;
}

export interface Team {
  key: string;
  scores: Scores;
  formation: string;
  eventOutcome: EventOutcome;
  name: Name;
}

export enum EventOutcome {
  Loss = "loss",
  Tie = "tie",
  Win = "win",
  Undecided = "undecided",
}

export interface Name {
  first: string;
  full: string;
  abbreviation: string;
  last?: string;
  videCode?: string;
}

export interface Scores {
  score: number;
  halfTime: number;
  fullTime: number;
  extraTime: number | null;
  shootout: number | null;
  aggregate: number | null;
  aggregateGoalsAway: number | null;
}

export interface EventProgress {
  period: string;
  status: string;
}

export interface Venue {
  name: Name;
  homeCountry: string;
}

export interface Round {
  key: string;
  name: null;
}

export interface TournamentMeta {
  tournamentSlug: string;
  tournamentName: Name;
}

export interface PayloadMeta {
  responseCode: number;
  hash: string;
  template: string;
}