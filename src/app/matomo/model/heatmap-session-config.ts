/**
 * id - The id of a heatmap or a session recording
 * sample_rate - How often a recording should be started. If you set 100, the activities will always be recorded when someone views
 * this page. If you set it to 10, only in 10% of all page views the activities will be actually recorded. You may use one decimal,
 * eg 0.1 for 0.1% of all page views.
 * min_time - If set, a session will be only recorded if the visitor has been at least for that many seconds on the current page.
 * keystrokes - Defines whether keystrokes should be recorded or not. Defaults to false.
 * activity - If enabled, requires the user to at least click and scroll once before a session is actually recorded. Defaults to false.
 */

export interface HeatmapSessionConfig {
  heatmap?: {
      id: number,
      sample_rate: number
  };
  session?: {
      id: number,
      sample_rate: number,
      min_time: number,
      keystrokes: boolean,
      activity: boolean
  };
}
