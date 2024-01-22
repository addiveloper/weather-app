/* eslint-disable @next/next/no-img-element */
export function HourCard({
  temp_c,
  temp_f,
  icon,
  time_epoch,
  grad,
}: {
  temp_c: number;
  temp_f: number;
  icon: string;
  time_epoch: number;
  grad: string;
}) {
  const convertEpoch = (epoch: number) => {
    const date = new Date(epoch * 1000);
    const hours = date.getHours();
    const minutes = "0" + date.getMinutes();
    const formattedTime = hours + ":" + minutes.substr(-2);
    return formattedTime;
  };
  return (
    <>
      <div className="flex flex-col p-2 items-center justify-center h-28 mx-4 border border-gray-200 rounded-xl dark:border-neutral-500">
        <p className="text-sm">{convertEpoch(time_epoch)}</p>
        <img src={icon} alt="icon" />
        {grad === "F" ? (
          <p className="text-sm text-nowrap">{Math.round(temp_f)} °F</p>
        ) : (
          <p className="text-sm text-nowrap">{Math.round(temp_c)} °C</p>
        )}
      </div>
    </>
  );
}
