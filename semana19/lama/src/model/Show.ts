export class Show {
    constructor(
        private id: string,
        private week_day: string,
        private start_time: string,
        private end_time: string,
        private band_id: string
    ) {}

    getId() {
        return this.id;
    }

    getWeek_day() {
        return this.week_day
    }

    getStart_time() {
        return this.start_time;
    }

    getEnd_time() {
        return this.end_time;
    }

    getBand_id() {
        return this.band_id;
    }

    setId(id: string) {
        this.id = id;
    }

    setWeek_day(week_day: string) {
        this.week_day = week_day;
    }

    setStart_time(start_time: string) {
        this.start_time = start_time;
    }

    setEnd_time(end_time: string) {
        this.end_time = end_time;
    }

    setBand_id(band_id: string) {
        this.band_id = band_id;
    }

    static toShowModel(show: any): Show {
        return new Show(show.id, show.week_day, show.start_time, show.end_time, show.band_id);
    }
}

export interface ShowInputDTO {
    week_day: string,
    start_time: string,
    end_time: string,
    band_id: string
}

export interface DayInputDTO {
    week_day: string 
}