import Comp from "./Comp";

const comp = (url, text) => {
  return (
    <div>
      <Comp url={url} text={text} />
    </div>
  );
};
export const data = {
  images: [
    comp(
      "https://am3pap002files.storage.live.com/y4mDaP8og02IoNGYjQpesrMtLujL3pqo43qeIDlrXEFkA3B_BwbPjhBDZfV2DOH8xl0yLdemTz7cTQU7mivWCkZNCEGR1bBD0G9xdHvotJ7JdguzQXEzl_1k4NLY_U5BfHgTeFhII_nYa1fk-uWKDgCyIuVLa_kwtGpmxMsNQDpqVND91564fzybtyGrmQa4J81?width=3264&height=2448&cropmode=none",
      "PRESIDENTIAL BUILDING"
    ),
    comp(
      "https://am3pap002files.storage.live.com/y4mkIdD_q28ZWYF3cyYA9wFjm-4vF_XV28mdSMWdBuAB6Siu-p079BbYoKzcYPJtS423EZhGAkyeZa-zfuhMRZWG3IN3ShoP_ACNXlcsgYm8p8CmTkzIzGNV_gmsn84Vujcli01H-gUb7yoYyi48V54cZ_BMBkI6bvlMa7alSZPCFLn_47AyEJIaGjD7mwAno14?width=2048&height=1536&cropmode=none",
      "VILANKULO AIRPORT"
    ),
    comp(
      "https://am3pap002files.storage.live.com/y4mFDElAylusXCkDj__eLuuTJFwQ_WCm411aOOfSW75JqS2f56zt9ewKjJ3CcS6iTDss92DPtE1OtHpBHQgudq-usfwSmgxXADY_mKklHbd2ZW-JhNKPQSZDQLQZf8jdsGSYD8B7HI899mlhYUhfUhoPL50Vv6ooI7Pkn4wpXJo6DcaMPJ9L4-Rn1IuVYzrPbu6?width=3840&height=2160&cropmode=none",
      "JIANGXI OFFICES"
    ),
  ],
};
