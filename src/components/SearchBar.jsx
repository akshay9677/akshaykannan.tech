import * as Dialog from "@radix-ui/react-dialog";
import Search from "../../public/dock/search.svg";

const SearchBar = ({ closeSearch }) => (
  <Dialog.Root defaultOpen={true} onOpenChange={closeSearch}>
    <Dialog.Portal>
      <Dialog.Overlay
        className="z-40 data-[state=open]:animate-overlayShow fixed inset-0"
        style={{ backdropFilter: "blur(3px)" }}
      />
      <Dialog.Content className="z-50 data-[state=open]:animate-contentShow fixed top-[20%] left-[0%] lg:left-[30%] focus:outline-none">
        <div
          className="w-[calc(100vw-50px)] mx-2 xl:w-[600px] bg-content-primary/10 text-content-primary flex gap-5 rounded-md flex flex-col border border-content-primary/10 p-2"
          style={{ backdropFilter: "blur(30px)" }}
        >
          <div className="flex items-center gap-3">
            <Search />
            <input
              placeholder="Search blogs or contents from this website"
              className="bg-transparent focus:outline-none text-sm lg:text-xl w-full placeholder:text-content-primary/40"
            />
          </div>
        </div>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default SearchBar;
