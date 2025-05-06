// 🎯 المطلوب:

// قم بإنشاء كائن (object) باسم saudiaAirlines يحتوي على المعلومات التالية:

// ✅ الخصائص (properties):

// - airlineName – اسم الشركة (مثلاً: "الخطوط الجوية السعودية")
// - country – البلد الأساسي (مثلاً: "السعودية")
// - fleetSize – عدد الطائرات
// - destinations – مصفوفة تحتوي على الوجهات (مثلاً: ["الرياض", "جدة", "دبي", "نيويورك"])
// - inOperation – حالة الشركة (true/false)

// ✅ الدوال (methods):

// 1. bookFlight(destination)
//    - إذا كانت الوجهة موجودة في المصفوفة، تطبع: "تم حجز رحلة إلى <destination>."
//    - وإذا لم تكن موجودة، تطبع: "عذرًا، لا توجد رحلات إلى <destination> حالياً."

// 2. addDestination(newDestination)
//    - تضيف وجهة جديدة إلى القائمة إذا لم تكن موجودة مسبقًا.

// 3. getSummary()
//    - تطبع ملخصًا عن الشركة مثل:
//      الخطوط الجوية السعودية تعمل في السعودية وتمتلك 120 طائرة وتطير إلى 20 وجهة.

// 🧪 مثال استخدام:

// saudiaAirlines.bookFlight("دبي");
// // تم حجز رحلة إلى دبي.

// saudiaAirlines.addDestination("لندن");

// saudiaAirlines.getSummary();
// // الخطوط الجوية السعودية تعمل في السعودية وتمتلك 120 طائرة وتطير إلى 21 وجهة.

let saudiaAirlines = {
  airlineName: "الخطوط الجوية السعودية",
  country: "السعودية",
  fleetSize: 5,
  destinations: ["الرياض", "جدة", "دبي", "نيويورك"],
  inOperation: false,
  bookFlight: function (destination) {
    if (this.destinations.includes(destination)) {
      console.log(`تم حجز رحلة إلى ${destination} بنجاح.`);
    } else {
      console.log(`عذرا لا توجد حجز رحلة إلى ${destination} .`);
    }
  },
  addDestination: function (newDestination) {
    if (!this.destinations.includes(newDestination)) {
      this.destinations.push(newDestination);
      console.log(`تم اضافة الرحلة الجديدة ${newDestination}`);
    }
  },
  getSummary: function () {
    console.log(
      `${this.airlineName} هي الخطوط الجوية السعودية  وتملك ${this.fleetSize} طائرة وتطير إلى ${this.destinations.length} وجهة.`
    );
  },
};

saudiaAirlines.bookFlight("دبي");
console.log("----------------------------------");

saudiaAirlines.bookFlight("لندن");
console.log("----------------------------------");

saudiaAirlines.addDestination("لندن");
console.log("----------------------------------");

saudiaAirlines.getSummary();
