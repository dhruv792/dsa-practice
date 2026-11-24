package practice.tries;

import java.util.List;

public final class TrieTest {
    private record Case(String name, Runnable check) {}

    public static void main(String[] args) {
        List<Case> cases = List.of(
            new Case("empty trie", () -> {
                Trie trie = new Trie();
                expect(false, trie.search("a"), "search(a)");
                expect(false, trie.startsWith("a"), "startsWith(a)");
            }),
            new Case("prefix and exact word are distinct", () -> {
                Trie trie = new Trie();
                trie.insert("apple");
                expect(true, trie.search("apple"), "search(apple)");
                expect(true, trie.startsWith("app"), "startsWith(app)");
                expect(false, trie.search("app"), "search(app)");
            }),
            new Case("insert the prefix after the longer word", () -> {
                Trie trie = new Trie();
                trie.insert("apple");
                trie.insert("app");
                expect(true, trie.search("app"), "search(app)");
                expect(true, trie.search("apple"), "search(apple)");
            }),
            new Case("insert a longer word after its prefix", () -> {
                Trie trie = new Trie();
                trie.insert("car");
                trie.insert("cart");
                expect(true, trie.search("car"), "search(car)");
                expect(true, trie.search("cart"), "search(cart)");
            }),
            new Case("shared prefix with two branches", () -> {
                Trie trie = new Trie();
                trie.insert("cat");
                trie.insert("can");
                expect(true, trie.search("cat"), "search(cat)");
                expect(true, trie.search("can"), "search(can)");
                expect(false, trie.search("car"), "search(car)");
                expect(false, trie.startsWith("cab"), "startsWith(cab)");
            }),
            new Case("identical insertions and alphabet endpoints", () -> {
                Trie trie = new Trie();
                trie.insert("a");
                trie.insert("z");
                trie.insert("z");
                expect(true, trie.search("z"), "search(z)");
                expect(true, trie.startsWith("a"), "startsWith(a)");
                expect(false, trie.startsWith("zz"), "startsWith(zz)");
            }),
            new Case("trie instances are independent", () -> {
                Trie first = new Trie();
                Trie second = new Trie();
                first.insert("dog");
                expect(true, first.search("dog"), "first.search(dog)");
                expect(false, second.startsWith("d"), "second.startsWith(d)");
            })
        );

        int passed = 0;
        for (Case example : cases) {
            try {
                example.check().run();
                passed++;
                System.out.println("PASS " + example.name());
            } catch (AssertionError | RuntimeException error) {
                System.err.println("FAIL " + example.name() + " — " + error.getMessage());
            }
        }

        System.out.printf("%d/%d passed%n", passed, cases.size());
        if (passed != cases.size()) System.exit(1);
    }

    private static void expect(boolean expected, boolean actual, String operation) {
        if (expected != actual) {
            throw new AssertionError(operation + " expected " + expected + ", received " + actual);
        }
    }
}
