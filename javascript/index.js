import _ from "lodash";
import { data } from "./data.js";

const result = [];
const groupById = _.groupBy(data, "id");
const dates = _.sortBy(_.uniq(_.map(data, "date")));

_.forEach(groupById, group => {
    const { id, name } = group[0];
    const prices = _.map(dates, date => {
        const pricesEntry = _.find(group, obj => obj.date == date);
        return (pricesEntry) ? pricesEntry.price : null
    })
    const maxPrice = _.maxBy(prices, obj => obj)
    const maxDate = _.find(group, obj => obj.price == maxPrice).date
    let priceCount = [];
    let count = 0;
    const counts = _.map(prices, arr => {
        if (arr === null) {
            priceCount.push(count);
            count = 0;
        } else {
            count += 1
        };
    })
    priceCount.push(count);
    result.push(_.flatten([id, name, prices, maxPrice, maxDate, _.max(priceCount)]))
})
console.log(result)

