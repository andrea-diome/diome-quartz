Add the property `annotation-target` to the frontmatter of your obsidian note, with a value corresponding to the location of the EPUB/PDF file. The location can either be a file in the vault (such as `Pdfs/mypdf.pdf`), or online (such as `https://arxiv.org/pdf/2104.13478.pdf`)


Then you can, in the open note pane, select "more options" (the three dots in the top right), and a new option "annotate" should be available.

The plugin automatically tries to determine whether the file is an `epub` or `pdf` based on the file path, but in case this doesn't work, you can also add the property `annotation-target-type` and specify whether it is `epub` or `pdf` manually.

[Github Repo](https://github.com/elias-sundqvist/obsidian-annotator)