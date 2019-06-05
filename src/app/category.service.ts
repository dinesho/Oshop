import { Injectable } from "@angular/core";
import { AngularFireDatabase } from "@angular/fire/database";
import { map } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class CategoryService {
  constructor(private db: AngularFireDatabase) {}

  getCategories() {
    return this.db
      .list("categories")
      .snapshotChanges()
      .pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
        )
      );
  }

  //   constructor(db: AngularFireDatabase) {
  //     this.itemsRef = db.list("messages");
  //     // Use snapshotChanges().map() to store the key
  //     this.items = this.itemsRef
  //       .snapshotChanges()
  //       .pipe(
  //         map(changes =>
  //           changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
  //         )
  //       );
  //   }
}
