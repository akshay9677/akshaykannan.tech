const Intro = ({ className }) => {
  return (
    <div className={`mt-10 ${className}`}>
      <div className="text-brand-primary text-heading mb-4">WORK</div>
      <div class="group relative flex flex-col pb-8 pl-7 last:pb-0 mt-2">
        <div class="absolute bottom-0 left-[calc(0.25rem-0.5px)] top-2 w-px bg-content-primary/10 group-first:top-3"></div>
        <div class="absolute left-0 top-2 h-2 w-2 rounded-full border border-brand-primary bg-primary"></div>
        <h3 class="mt-2 text-sub-heading text-content-primary">
          Facilio, Member of Technical Staff
        </h3>
        <p class="mt-0.5 text-sm/6 text-content-primary/80">
          Working on the core front-end team, where I build frameworks for the
          web interfaces of facilio.
        </p>
      </div>
      <div class="group relative flex flex-col pb-8 pl-7 last:pb-0">
        <div class="absolute left-0 top-2 h-2 w-2 rounded-full border border-brand-primary bg-primary"></div>
        <h3 class="mt-2 text-sub-heading text-content-primary">
          Full Creative, SDE Intern
        </h3>
        <p class="mt-0.5 text-sm/6 text-content-primary/80">
          Worked on a WebRTC platform for video conferencing. Also worked on a
          mock project where two users can have a video conferencing session.
        </p>
      </div>
    </div>
  );
};

export default Intro;
