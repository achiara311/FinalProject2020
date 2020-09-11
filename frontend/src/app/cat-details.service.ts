import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";
@Injectable({
	providedIn: "root",
})
export class CatDetailsService {
	url: string = `https://api.petfinder.com/v2/animals`;
	constructor(private http: HttpClient) {}

	getData(): any {
		//return this.http.get(this.url);
		let auth_token = `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ3NXdtbk9PYXhKOGx5Tkp4SHc3TVZlTVJ1YzZ0bFk3c2FMelBaUFlwTExwVDdHcWppRCIsImp0aSI6ImQ2OWI2Nzg0NzhmYjg3NTcwMWFkOGE0MDZhMWFkNTY0YTk2MTAxY2ZkMDIzZmJmNzRjMDYzMWM0ZjU4ODU0MDRmMGY1YjllM2JiNTJiMzE0IiwiaWF0IjoxNTk5ODM0MjIxLCJuYmYiOjE1OTk4MzQyMjEsImV4cCI6MTU5OTgzNzgyMSwic3ViIjoiIiwic2NvcGVzIjpbXX0.kfm9NmlCZa81HYZ7sgsoM0uNcfHN4cfWud-CydUVoV_Zcj65JuCVCyxEa3CQk_MQlMmbIauIPNn4nrWfwACufy8h0U57n1HZFdSKv8zYlct6_JluOyrPfzjOIBnjQr_DQXmugISBQWoym81oqxVNyMeo_rgVVNK1n2EY-6o-YLz5maKZyvslvzw_H7dgEichQ09JmLIXh8XU9K18vdmVROJ05w6BiMlS57FzhxQPueDvJOFpOjHSmG9pxvGDBvUt4SIxnKgWJdKScx9tpKT9Y-b7e5C_rjhd_3Nh8E3BGl_ieF8k1sO83elA5gEfa0ouOLM3eQmtjtV2ZxTYvWehag`; // `eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiJ9.eyJhdWQiOiJ3NXdtbk9PYXhKOGx5Tkp4SHc3TVZlTVJ1YzZ0bFk3c2FMelBaUFlwTExwVDdHcWppRCIsImp0aSI6ImJkNjY5NWY1NDY5NDVlZTMzMjE3MWJhOTJhMGFiZTkwNzJmOWUzZWVkNjJmYmE5MTYzYTJhZjc2Y2VhM2M3MWZmZTg4YzIzM2M3NGRjYWQzIiwiaWF0IjoxNTk5ODI5ODUwLCJuYmYiOjE1OTk4Mjk4NTAsImV4cCI6MTU5OTgzMzQ1MCwic3ViIjoiIiwic2NvcGVzIjpbXX0.hsrES6iLJxgjy1A_vgID3yoaLY4XV-O6LRf2aRSM2MVl_1tJL1-UhuaGCoWfAImEb0c1OpkSFVvCfQZvd3Jow_ZLxNIafQUkmq9UR8FXr4RKRW_q0Z30vRdiXDBc1TKvAZmd3ger0okH5g36MbEhgQRRiZu0WXiszKRzdkwgj3CZWFPw21TLIErWliiSDojd01jTa7GY3Q1GII-D_tATYLlz3m0genXjm2dkqaRkonNeIMZqmWsTCdQ7WYj-MnfdmuxwlULIm93QgqqfnmqcAwmArtwqP0x4NfLb9dMxlSm0LcrE6Gesfay1Yvs_dS6B8OqmVuQj6P8lUL0jgBg92Q`;
		const httpOptions = {
			headers: new HttpHeaders({
				"Content-Type": "application/json",
				Authorization: `Bearer ${auth_token}`,
				// "Access-Control-Allow-Origin": "https://api.petfinder.com/v2/animals",

				// "Access-Control-Allow-Methods": "GET",
			}),
		};

		return this.http.get(this.url, httpOptions);
	}
}
